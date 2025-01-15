// script.js

function generateQRCode() {
    const value = document.getElementById('qr-code-value').value;

    if (!value.trim()) {
        alert("Please enter a valid text or URL.");
        return;
    }

    const qrCode = new QRious({
        value: value,
        size: 400,
        level: 'H'
    });

    document.getElementById('qr-code-image').src = qrCode.toDataURL();
}
