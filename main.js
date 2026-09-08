import './style.css';

document.querySelector('#app').innerHTML = `
  <!-- Header -->
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1 1 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178a1 1 0 010 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        </div>
        <span class="text-xl font-bold text-slate-900">ClarityPro</span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#hero" class="nav-link text-sm font-medium text-slate-600 hover:text-brand-600">Home</a>
        <div class="dropdown relative">
          <button class="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600">
            Tools
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="dropdown-menu absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-100 py-2">
            <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-600">PixelFix - Photo Repair</a>
            <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-600">ErasePro - Object Eraser</a>
            <a href="#" class="block px-4 py-2 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-600">ShrinkPro - Image Compressor</a>
          </div>
        </div>
        <a href="#contact" class="nav-link text-sm font-medium text-slate-600 hover:text-brand-600">Contact</a>
      </div>

      <button id="mobileMenuBtn" class="md:hidden p-2 rounded-lg hover:bg-slate-100">
        <svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </nav>
    <div id="mobileMenu" class="hidden md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-2">
      <a href="#hero" class="block py-2 text-sm font-medium text-slate-600">Home</a>
      <a href="#" class="block py-2 text-sm font-medium text-slate-600">PixelFix</a>
      <a href="#" class="block py-2 text-sm font-medium text-slate-600">ErasePro</a>
      <a href="#" class="block py-2 text-sm font-medium text-slate-600">ShrinkPro</a>
      <a href="#contact" class="block py-2 text-sm font-medium text-slate-600">Contact</a>
    </div>
  </header>

  <!-- Hero -->
  <section id="hero" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6 fade-in">
      <span class="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
      Powered by AI Technology
    </div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
      AI Image Unblurrer - Make Blurry Photos <span class="gradient-text">Clear &amp; Sharp</span>
    </h1>
    <p class="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
      100% Free, No Sign-in Required, No Watermark, No Subscription - Fix blurry photos instantly in your browser.
    </p>
    <!-- Trust badges -->
    <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
      <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-700 text-sm font-semibold">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        No Sign-in
      </div>
      <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-700 text-sm font-semibold">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        No Watermark
      </div>
      <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 text-accent-700 text-sm font-semibold">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
        No Subscription
      </div>
    </div>
  </section>

  <!-- Ad Top -->
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
    <div id="ad-top" class="ad-box">Ad Space</div>
  </div>

  <!-- Main Tool Area -->
  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <!-- Upload box -->
    <div id="uploadArea" class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10">
      <div id="dropZone" class="border-2 border-dashed border-slate-300 rounded-2xl p-10 sm:p-16 text-center cursor-pointer hover:border-brand-400 hover:bg-brand-50/30 transition-all duration-300">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-50 flex items-center justify-center">
          <svg class="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
          </svg>
        </div>
        <p class="text-lg font-semibold text-slate-700 mb-1">Drop blurry image here or click to browse</p>
        <p class="text-sm text-slate-400">Supported: JPG, PNG, WEBP (Max 10MB)</p>
        <input type="file" id="fileInput" accept="image/jpeg,image/png,image/webp" class="hidden" />
      </div>
    </div>

    <!-- Processing + Results -->
    <div id="resultArea" class="hidden mt-6 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 fade-in">
      <!-- Loading overlay -->
      <div id="loadingOverlay" class="hidden flex-col items-center justify-center py-16">
        <div class="w-12 h-12 border-4 border-brand-200 border-t-brand-500 rounded-full spin mb-4"></div>
        <p class="text-sm font-medium text-slate-600" id="loadingText">Processing image with AI...</p>
        <p class="text-xs text-slate-400 mt-1">This may take a few seconds</p>
      </div>

      <!-- Compare slider -->
      <div id="compareSection" class="hidden">
        <h3 class="text-lg font-bold text-slate-800 mb-4 text-center">Before &amp; After Comparison</h3>
        <div class="compare-container" id="compareContainer">
          <img id="beforeImg" class="w-full block rounded-xl" alt="Before" />
          <div class="compare-after" id="afterWrapper">
            <img id="afterImg" alt="After" />
          </div>
          <div class="compare-divider" id="compareDivider">
            <div class="compare-handle">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7l-4 4 4 4M16 7l4 4-4 4"/></svg>
            </div>
          </div>
          <input type="range" id="compareSlider" class="compare-slider absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10" min="0" max="100" value="50" />
        </div>
        <div class="flex items-center justify-center gap-8 mt-3 text-sm font-medium text-slate-500">
          <span>Before (Blurry)</span>
          <span>After (Unblurred)</span>
        </div>
      </div>

      <!-- Controls -->
      <div id="controlsSection" class="hidden mt-6 space-y-5">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <div class="flex-1 min-w-[200px]">
            <div class="flex items-center justify-between mb-2">
              <label class="text-sm font-semibold text-slate-700">Sharpness Strength</label>
              <span id="strengthValue" class="text-sm font-bold text-brand-600">50%</span>
            </div>
            <input type="range" id="strengthSlider" min="0" max="100" value="50"
              class="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-brand-500" />
          </div>
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-2 cursor-pointer">
              <span class="text-sm font-semibold text-slate-700">Auto Enhance</span>
              <div class="relative">
                <input type="checkbox" id="autoEnhance" class="sr-only peer" checked />
                <div class="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-brand-500 transition-colors"></div>
                <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5 shadow"></div>
              </div>
            </label>
          </div>
        </div>
        <button id="unblurBtn" class="gradient-btn w-full sm:w-auto px-8 py-3.5 rounded-xl text-white font-semibold text-base shadow-md">
          Unblur Now
        </button>
      </div>

      <!-- Download button -->
      <div id="downloadSection" class="hidden mt-6">
        <button id="downloadBtn" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-bold text-base shadow-lg shadow-accent-500/30 transition-all hover:shadow-xl hover:shadow-accent-500/40 flex items-center justify-center gap-2 mx-auto">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          Download HD Image (No Watermark)
        </button>
      </div>
    </div>
  </section>

  <!-- Ad Middle -->
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <div id="ad-middle" class="ad-box">Ad Space</div>
  </div>

  <!-- Features -->
  <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
        <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-50 flex items-center justify-center">
          <svg class="w-7 h-7 text-brand-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        </div>
        <h3 class="text-lg font-bold text-slate-800 mb-2">100% Private</h3>
        <p class="text-sm text-slate-500 leading-relaxed">All processing happens in your browser. Your images never leave your device.</p>
      </div>
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
        <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent-500/10 flex items-center justify-center">
          <svg class="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        </div>
        <h3 class="text-lg font-bold text-slate-800 mb-2">Super Fast AI</h3>
        <p class="text-sm text-slate-500 leading-relaxed">Advanced AI models process your images in seconds, right in your browser.</p>
      </div>
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
        <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-amber-50 flex items-center justify-center">
          <svg class="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 class="text-lg font-bold text-slate-800 mb-2">Free Forever</h3>
        <p class="text-sm text-slate-500 leading-relaxed">No subscriptions, no hidden fees, no limits. Use ClarityPro as much as you want.</p>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <h2 class="text-2xl font-bold text-slate-900 text-center mb-8">Frequently Asked Questions</h2>
    <div class="space-y-3">
      <details class="bg-white rounded-xl border border-slate-200 p-4 group">
        <summary class="flex items-center justify-between text-sm font-semibold text-slate-700">
          How does the AI image unblurring work?
          <svg class="faq-chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <p class="mt-3 text-sm text-slate-500 leading-relaxed">ClarityPro uses advanced AI models and sharpening algorithms running entirely in your browser via TensorFlow.js. It analyzes the blur patterns in your image and reconstructs sharp details, enhancing edges and textures to make your photos clear and crisp.</p>
      </details>
      <details class="bg-white rounded-xl border border-slate-200 p-4 group">
        <summary class="flex items-center justify-between text-sm font-semibold text-slate-700">
          Is ClarityPro really free with no watermark?
          <svg class="faq-chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <p class="mt-3 text-sm text-slate-500 leading-relaxed">Yes! ClarityPro is 100% free with no watermark, no sign-in required, and no subscription. You can unblur and download as many images as you want without any limitations or hidden costs.</p>
      </details>
      <details class="bg-white rounded-xl border border-slate-200 p-4 group">
        <summary class="flex items-center justify-between text-sm font-semibold text-slate-700">
          Are my photos uploaded to a server?
          <svg class="faq-chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <p class="mt-3 text-sm text-slate-500 leading-relaxed">No. All image processing happens locally in your browser. Your photos never leave your device, ensuring complete privacy and security. There is no server-side processing involved.</p>
      </details>
      <details class="bg-white rounded-xl border border-slate-200 p-4 group">
        <summary class="flex items-center justify-between text-sm font-semibold text-slate-700">
          What image formats and sizes are supported?
          <svg class="faq-chevron w-5 h-5 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </summary>
        <p class="mt-3 text-sm text-slate-500 leading-relaxed">ClarityPro supports JPG, PNG, and WEBP image formats up to 10MB in file size. For best results, use the highest quality version of your blurry photo. The AI works best on photos with moderate blur rather than extremely heavy blur.</p>
      </details>
    </div>
  </section>

  <!-- Ad Bottom -->
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <div id="ad-bottom" class="ad-box">Ad Space</div>
  </div>

  <!-- Footer -->
  <footer id="contact" class="bg-slate-900 text-slate-300 mt-auto">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1 1 0 010-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178a1 1 0 010 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <span class="text-lg font-bold text-white">ClarityPro</span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed">Free AI-powered image unblurring tool. Make your blurry photos clear and sharp instantly.</p>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">Our Tools</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-slate-400 hover:text-brand-400 transition-colors">PixelFix - Photo Repair</a></li>
            <li><a href="#" class="text-slate-400 hover:text-brand-400 transition-colors">ErasePro - Object Eraser</a></li>
            <li><a href="#" class="text-slate-400 hover:text-brand-400 transition-colors">ShrinkPro - Image Compressor</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#hero" class="text-slate-400 hover:text-brand-400 transition-colors">Home</a></li>
            <li><a href="#" class="text-slate-400 hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="text-slate-400 hover:text-brand-400 transition-colors">Terms of Use</a></li>
            <li><a href="mailto:contact@claritypro.com" class="text-slate-400 hover:text-brand-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-slate-800 mt-8 pt-6 text-center text-sm text-slate-500">
        &copy; 2026 ClarityPro. All rights reserved. 100% Free, No Watermark, No Sign-in.
      </div>
    </div>
  </footer>
`;

// ===== Application Logic =====

const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const uploadArea = document.getElementById('uploadArea');
const resultArea = document.getElementById('resultArea');
const loadingOverlay = document.getElementById('loadingOverlay');
const loadingText = document.getElementById('loadingText');
const compareSection = document.getElementById('compareSection');
const controlsSection = document.getElementById('controlsSection');
const downloadSection = document.getElementById('downloadSection');
const beforeImg = document.getElementById('beforeImg');
const afterImg = document.getElementById('afterImg');
const afterWrapper = document.getElementById('afterWrapper');
const compareContainer = document.getElementById('compareContainer');
const compareSlider = document.getElementById('compareSlider');
const compareDivider = document.getElementById('compareDivider');
const strengthSlider = document.getElementById('strengthSlider');
const strengthValue = document.getElementById('strengthValue');
const autoEnhance = document.getElementById('autoEnhance');
const unblurBtn = document.getElementById('unblurBtn');
const downloadBtn = document.getElementById('downloadBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

let originalImage = null;
let processedCanvas = null;
let upscalerModel = null;
let modelLoaded = false;

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// File input click
dropZone.addEventListener('click', () => fileInput.click());

// Drag & drop
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('border-brand-500', 'bg-brand-50/50');
});
dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('border-brand-500', 'bg-brand-50/50');
});
dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropZone.classList.remove('border-brand-500', 'bg-brand-50/50');
  const file = e.dataTransfer.files[0];
  if (file) handleFile(file);
});

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) handleFile(file);
});

function handleFile(file) {
  if (!file.type.match(/image\/(jpeg|jpg|png|webp)/)) {
    alert('Please upload a JPG, PNG, or WEBP image.');
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    alert('Image size must be under 10MB.');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    originalImage = new Image();
    originalImage.onload = () => {
      uploadArea.classList.add('hidden');
      resultArea.classList.remove('hidden');
      compareSection.classList.remove('hidden');
      controlsSection.classList.remove('hidden');

      beforeImg.src = e.target.result;
      beforeImg.onload = () => {
        // Initialize compare slider
        updateCompareSlider(50);
        // Auto-process on load
        processImage();
      };
    };
    originalImage.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Compare slider
compareSlider.addEventListener('input', (e) => {
  updateCompareSlider(parseInt(e.target.value));
});

function updateCompareSlider(val) {
  const pct = val / 100;
  const containerWidth = compareContainer.offsetWidth;
  afterWrapper.style.width = containerWidth + 'px';
  afterImg.style.width = containerWidth + 'px';
  afterImg.style.height = 'auto';
  const clipWidth = containerWidth * pct;
  afterWrapper.style.clipPath = `inset(0 0 0 ${clipWidth}px)`;
  compareDivider.style.left = clipWidth + 'px';
}

window.addEventListener('resize', () => {
  if (!compareSection.classList.contains('hidden')) {
    updateCompareSlider(parseInt(compareSlider.value));
  }
});

// Strength slider
strengthSlider.addEventListener('input', (e) => {
  strengthValue.textContent = e.target.value + '%';
});

// Unblur button
unblurBtn.addEventListener('click', () => {
  processImage();
});

async function loadUpscalerModel() {
  if (modelLoaded) return;
  try {
    loadingText.textContent = 'Loading AI model...';
    const modelExport = window['UpscalerESRGANSlim'] || window['esrgan_slim'] || window['esrganSlim'] || null;
    if (typeof window['Upscaler'] !== 'undefined' && modelExport) {
      upscalerModel = new window['Upscaler']({ model: modelExport });
    } else if (typeof window['Upscaler'] !== 'undefined') {
      upscalerModel = new window['Upscaler']();
    }
    modelLoaded = true;
  } catch (err) {
    console.warn('UpscalerJS model load failed, using fallback:', err);
    modelLoaded = true;
  }
}

async function processImage() {
  if (!originalImage) return;

  controlsSection.classList.add('hidden');
  compareSection.classList.add('hidden');
  downloadSection.classList.add('hidden');
  loadingOverlay.classList.remove('hidden');
  loadingOverlay.classList.add('flex');

  const strength = parseInt(strengthSlider.value) / 100;
  const useAuto = autoEnhance.checked;

  try {
    await loadUpscalerModel();

    loadingText.textContent = 'Processing image with AI...';

    // Try UpscalerJS first for AI upscaling
    let useAI = false;
    if (upscalerModel) {
      try {
        loadingText.textContent = 'AI upscaling image...';
        const upscaled = await upscalerModel.execute(originalImage, { scale: 2 });
        if (upscaled instanceof HTMLImageElement || upscaled instanceof HTMLCanvasElement) {
          const aiCanvas = document.createElement('canvas');
          aiCanvas.width = upscaled.width || upscaled.naturalWidth;
          aiCanvas.height = upscaled.height || upscaled.naturalHeight;
          const aiCtx = aiCanvas.getContext('2d');
          aiCtx.drawImage(upscaled, 0, 0);
          // Apply sharpening on top of AI upscale
          processedCanvas = applySharpening(aiCanvas, strength, useAuto);
          useAI = true;
        }
      } catch (aiErr) {
        console.warn('AI upscaling failed, using fallback:', aiErr);
      }
    }

    if (!useAI) {
      // Fallback: canvas-based sharpening + upscaling
      processedCanvas = canvasUnblur(originalImage, strength, useAuto);
    }

    // Display result
    afterImg.src = processedCanvas.toDataURL('image/png');
    afterImg.onload = () => {
      loadingOverlay.classList.add('hidden');
      loadingOverlay.classList.remove('flex');
      compareSection.classList.remove('hidden');
      controlsSection.classList.remove('hidden');
      downloadSection.classList.remove('hidden');
      updateCompareSlider(parseInt(compareSlider.value));
    };
  } catch (err) {
    console.error('Processing failed:', err);
    loadingText.textContent = 'Processing failed. Please try again.';
    setTimeout(() => {
      loadingOverlay.classList.add('hidden');
      loadingOverlay.classList.remove('flex');
      controlsSection.classList.remove('hidden');
      compareSection.classList.remove('hidden');
    }, 2000);
  }
}

// Canvas-based unblur: upscale + sharpen
function canvasUnblur(img, strength, autoEnhance) {
  // Upscale 1.5x for HD effect
  const scale = 1.5;
  const w = Math.round(img.naturalWidth * scale);
  const h = Math.round(img.naturalHeight * scale);

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, w, h);

  return applySharpening(canvas, strength, autoEnhance);
}

// Convolution-based sharpening
function applySharpening(sourceCanvas, strength, autoEnhance) {
  const w = sourceCanvas.width;
  const h = sourceCanvas.height;
  const ctx = sourceCanvas.getContext('2d');
  const imageData = ctx.getImageData(0, 0, w, h);
  const data = imageData.data;

  // Sharpen kernel - adjustable strength
  const s = Math.max(0.1, strength);
  const center = 1 + 4 * s;
  const side = -s;

  const kernel = [
    0, side, 0,
    side, center, side,
    0, side, 0,
  ];

  const output = new Uint8ClampedArray(data.length);
  const kh = 3, kw = 3, half = 1;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let r = 0, g = 0, b = 0;
      for (let ky = 0; ky < kh; ky++) {
        for (let kx = 0; kx < kw; kx++) {
          const px = Math.min(w - 1, Math.max(0, x + kx - half));
          const py = Math.min(h - 1, Math.max(0, y + ky - half));
          const idx = (py * w + px) * 4;
          const k = kernel[ky * kw + kx];
          r += data[idx] * k;
          g += data[idx + 1] * k;
          b += data[idx + 2] * k;
        }
      }
      const outIdx = (y * w + x) * 4;
      output[outIdx] = Math.min(255, Math.max(0, r));
      output[outIdx + 1] = Math.min(255, Math.max(0, g));
      output[outIdx + 2] = Math.min(255, Math.max(0, b));
      output[outIdx + 3] = data[outIdx + 3];
    }
  }

  // Auto enhance: boost contrast and saturation
  if (autoEnhance) {
    let min = 255, max = 0;
    for (let i = 0; i < output.length; i += 4) {
      const lum = 0.299 * output[i] + 0.587 * output[i + 1] + 0.114 * output[i + 2];
      if (lum < min) min = lum;
      if (lum > max) max = lum;
    }
    const range = Math.max(1, max - min);
    const satBoost = 1.15;
    for (let i = 0; i < output.length; i += 4) {
      // Contrast stretch
      output[i] = Math.min(255, Math.max(0, ((output[i] - min) / range) * 255));
      output[i + 1] = Math.min(255, Math.max(0, ((output[i + 1] - min) / range) * 255));
      output[i + 2] = Math.min(255, Math.max(0, ((output[i + 2] - min) / range) * 255));
      // Saturation boost
      const gray = 0.299 * output[i] + 0.587 * output[i + 1] + 0.114 * output[i + 2];
      output[i] = Math.min(255, Math.max(0, gray + (output[i] - gray) * satBoost));
      output[i + 1] = Math.min(255, Math.max(0, gray + (output[i + 1] - gray) * satBoost));
      output[i + 2] = Math.min(255, Math.max(0, gray + (output[i + 2] - gray) * satBoost));
    }
  }

  const result = ctx.createImageData(w, h);
  result.data.set(output);
  ctx.putImageData(result, 0, 0);

  return sourceCanvas;
}

// Download
downloadBtn.addEventListener('click', () => {
  if (!processedCanvas) return;
  const link = document.createElement('a');
  link.download = 'claritypro-unblurred.png';
  link.href = processedCanvas.toDataURL('image/png');
  link.click();
});
