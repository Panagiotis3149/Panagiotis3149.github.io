#version 300 es
precision highp float;

uniform vec2 resolution;
uniform float time;

// Define constants
#define PI 3.1415926535
#define T time * 3.0
#define PELLET_SIZE 1.0 / 16.0
#define PELLET_NUM 2
#define THICKNESS 0.13
#define RADIUS 0.7

// Define functions
float sdArc(in vec2 p, in float a, in float ra, float rb) {
    a *= PI;
    vec2 sc = vec2(sin(a), cos(a));
    p.x = abs(p.x);
    return ((sc.y * p.x > sc.x * p.y) ? length(p - sc * ra) : abs(length(p) - ra)) - rb;
}

mat2 rot(float a) {
    a *= PI;
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

float s(float x) {
    return smoothstep(0.0, 1.0, x);
}

float sminCubic(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0) / k;
    return min(a, b) - h * h * h * k * (1.0 / 6.0);
}

vec3 pal(float x) {
    return mix(vec3(0.988, 0.569, 0.086), vec3(1.0, 0.082, 0.537), x);
}

float f(float x) {
    return -2.0 * PELLET_SIZE * x;
}

float dist(vec2 p) {
    const int n = PELLET_NUM;
    float N = float(n);

    float d1 = sdArc(p * rot(floor(T) + 1.0),
                     0.5 - PELLET_SIZE,
                     RADIUS,
                     THICKNESS);
    float d2 = 9e9;
    for (int i = 0; i < n; i++) {
        float j = float(i);
        float t = s(fract((T + j) / N));
        float a = mix(-0.5, 0.5 - f(1.0), t) + f(T);
        d2 = min(sdArc(p * rot(a),
                        PELLET_SIZE,
                        RADIUS,
                        THICKNESS), d2);
    }
    float r = abs(length(p) - RADIUS) - THICKNESS; // sdf of ring containing the arcs 
    float d = sminCubic(d1, d2, 0.2);
    return max(d, r);
}

out vec4 fragColor;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy - 0.5;
    vec2 p = (2.0 * gl_FragCoord.xy - resolution.xy) / resolution.y;

    float d = dist(p); // shape
    float m = smoothstep(0.01, 0.0, d);

    float d1 = dist(p + vec2(0.0, 0.15)); // shadow
    float s = smoothstep(0.2, -0.4, d1);

    m = max(s, m); // combine shadow and shape

    vec3 col = m * pal(p.x - p.y + 0.5); // color shape and shadow
    col += 1.0 - m; // white background
    col *= 1.0 - 1.5 * dot(uv, uv); // vignette
    fragColor = vec4(col, 1.0);
}
