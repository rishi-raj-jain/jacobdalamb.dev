import Blobity from './_snowpack/pkg/blobity.js';

const blobity = new Blobity({
  licenseKey: 'null',
  color: '#1e3a8a',
  opacity: 1,
  zIndex: 1,
  dotColor: '#e5e7eb',
  fontSize: 16,
  fontColor: '#ffffff',
  size: 40,
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  blobity.updateOptions({ color: '#60a5fa' });
}