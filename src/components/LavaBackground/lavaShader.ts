// GLSL Shaders for Raymarched Lava Metaballs

export const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

export const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uScrollProgress;
  uniform float uScrollVelocity;
  uniform float uQuality;

  // Blob animation
  uniform vec4 uBlobPositions[10];  // xyz position, w radius
  uniform int uBlobCount;

  // Content repulsion
  uniform vec4 uRepulsionZones[10];  // xy center, zw size
  uniform float uRepulsionStrengths[10];
  uniform int uRepulsionCount;

  varying vec2 vUv;

  // ========== NOISE FUNCTIONS ==========

  // 3D Simplex noise (simplified version)
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // ========== SDF FUNCTIONS ==========

  // Smooth minimum for blending SDFs
  float smin(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0) / k;
    return min(a, b) - h * h * k * (1.0 / 4.0);
  }

  // Metaball SDF
  float sdMetaball(vec3 p, vec3 center, float radius) {
    return length(p - center) - radius;
  }

  // Box SDF for repulsion zones
  float sdBox(vec2 p, vec2 center, vec2 size) {
    vec2 d = abs(p - center) - size * 0.5;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
  }

  // Get organic blob position with slow animation
  vec3 getBlobPosition(int index, float time) {
    if (index >= uBlobCount) return vec3(0.0);

    vec4 blobData = uBlobPositions[index];
    vec3 basePos = blobData.xyz;

    // Slow, viscous oscillation (Cold Lava feel)
    float t = time * 0.25;  // Very slow time multiplier
    float phase = float(index) * 1.618;  // Golden ratio for variation

    vec3 offset = vec3(
      sin(t + phase) * 0.08,
      cos(t * 0.7 + phase) * 0.12,
      sin(t * 0.3 + phase) * 0.05
    );

    // Add scroll velocity stretch
    offset.y += uScrollVelocity * 0.3;

    return basePos + offset;
  }

  // Combined metaballs SDF
  float sdMetaballs(vec3 p) {
    float d = 1e10;

    for (int i = 0; i < 10; i++) {
      if (i >= uBlobCount) break;

      vec4 blobData = uBlobPositions[i];
      vec3 blobPos = getBlobPosition(i, uTime);
      float radius = blobData.w;

      float blob = sdMetaball(p, blobPos, radius);
      d = smin(d, blob, 0.5);  // Smooth blend
    }

    // Add noise displacement for organic surface
    float noise = snoise(p * 1.5 + uTime * 0.1) * 0.1;
    d += noise;

    return d;
  }

  // Calculate repulsion field from content zones
  float getRepulsion(vec2 screenPos) {
    float repulsion = 0.0;

    for (int i = 0; i < 10; i++) {
      if (i >= uRepulsionCount) break;

      vec4 zone = uRepulsionZones[i];
      vec2 center = zone.xy;
      vec2 size = zone.zw;
      float strength = uRepulsionStrengths[i];

      // Distance to repulsion zone
      float dist = sdBox(screenPos, center, size * 1.2);  // Padding

      // Inverse square repulsion
      repulsion += strength / (dist * dist + 0.1);
    }

    return repulsion;
  }

  // ========== RAYMARCHING ==========

  int getMaxSteps() {
    if (uQuality < 0.6) return 32;
    if (uQuality < 0.9) return 48;
    return 64;
  }

  const float MAX_DIST = 10.0;
  const float SURF_DIST = 0.01;

  float rayMarch(vec3 ro, vec3 rd) {
    float d = 0.0;
    int maxSteps = getMaxSteps();

    for (int i = 0; i < 64; i++) {
      if (i >= maxSteps) break;

      vec3 p = ro + rd * d;
      float ds = sdMetaballs(p);

      if (ds < SURF_DIST || d > MAX_DIST) break;

      d += ds * 0.8;  // Slight understepping for stability
    }

    return d;
  }

  // Calculate surface normal
  vec3 getNormal(vec3 p) {
    vec2 e = vec2(0.001, 0.0);

    float d = sdMetaballs(p);
    vec3 n = d - vec3(
      sdMetaballs(p - e.xyy),
      sdMetaballs(p - e.yxy),
      sdMetaballs(p - e.yyx)
    );

    return normalize(n);
  }

  // ========== LIGHTING & COLOR ==========

  void main() {
    // Normalize coordinates
    vec2 uv = (vUv - 0.5) * 2.0;
    uv.x *= uResolution.x / uResolution.y;

    // Setup ray
    vec3 ro = vec3(0.0, 0.0, 3.0);  // Camera position
    vec3 rd = normalize(vec3(uv, -1.0));  // Ray direction

    // Raymarch
    float d = rayMarch(ro, rd);

    // Background (transparent)
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);

    if (d < MAX_DIST) {
      vec3 p = ro + rd * d;
      vec3 normal = getNormal(p);

      // Lava color palette (tailwind lava-900 to lava-500)
      vec3 coreColor = vec3(0.486, 0.176, 0.071);   // #7c2d12
      vec3 midColor = vec3(0.914, 0.345, 0.047);    // #ea580c
      vec3 edgeColor = vec3(0.976, 0.451, 0.086);   // #f97316

      // Temperature gradient based on distance and noise
      float temp = smoothstep(0.0, 1.0, p.z / 3.0);
      temp += snoise(p * 3.0) * 0.2;

      vec3 lavaColor = mix(edgeColor, coreColor, clamp(temp, 0.0, 1.0));

      // Fresnel effect (edges glow brighter)
      float fresnel = pow(1.0 - dot(normal, -rd), 3.0);
      lavaColor += fresnel * edgeColor * 0.4;

      // Subsurface scattering approximation
      float thickness = smoothstep(0.0, 2.0, d);
      lavaColor = mix(lavaColor, midColor, thickness * 0.3);

      // Apply repulsion dimming (lava fades near content)
      vec2 screenPos = uv;
      float repulsion = getRepulsion(screenPos);
      float dimming = smoothstep(2.0, 0.5, repulsion);

      // Final alpha (semi-transparent, dimmed near content)
      float alpha = 0.25 * dimming;

      color = vec4(lavaColor, alpha);
    }

    gl_FragColor = color;
  }
`
