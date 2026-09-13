// The entire site is static — every route below is prerendered at build
// time and shipped as plain HTML/CSS/JS to GitHub Pages.
export const prerender = true;

// Generates `<route>/index.html` for every page, which is the most
// broadly compatible layout for static file hosts (including GitHub Pages).
export const trailingSlash = 'always';
