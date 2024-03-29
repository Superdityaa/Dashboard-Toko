const mongoose = require('mongoose');
const { Schema } = mongoose;
const Bahan = require('./bahanSchema');
const { Admin } = require('./userSchema');

// Sub-skema untuk histori update barang
const historiUpdateSchema = new Schema({
    tanggal: {
        type: Date,
        default: Date.now
    },
    stokSebelumnya: Number,
    stokSesudahnya: Number
});

// Schema utama (parent)
const produkSchema = new Schema({
    namaProduk: String,
    kategori: {
        type: String,
        enum: ['Roti', 'Snack', 'Nasi'],
        default: 'Roti'
    },
    stok: Number,
    jumlahTerjual: {
        type: Number,
        default: 0
    },
    jenisPemesanan: {
        type: String,
        enum: ['Ready', 'Pre-Order'],
        default: 'Ready'
    },
    bobotTenaga: Number,
    hargaProduk: Number,
    gambar: String,
    deskripsi: String,
    idBahan: [{
        type: Schema.Types.ObjectId,
        ref: 'Bahan'
    }],
    idAdmin: {
        type: Schema.Types.ObjectId,
        ref: 'Admin'
    },
    tglTambah: Date,
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    },
    historiUpdate: [historiUpdateSchema] // Menambahkan sub-skema histori update
});

module.exports = mongoose.model('Produk', produkSchema);
