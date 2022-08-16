function confirmButton() {
    if(window.confirm("Apakah anda yakin?")){
            var namauser = document.useform.nama.value;
            var age = parseInt(document.useform.usia.value);
            var jeniskelamin = document.useform.jk.value;
            var gmail = document.useform.email.value;
            var kelulusan = (document.useform.tanggal.value);
            var keterangan = document.useform.ket.value;
        
            document.write(namauser);
            document.write("<br>" + age + " Tahun");
            document.write("<br>" + jeniskelamin);
            document.write("<br>" + gmail);
            document.write("<br>" + kelulusan);
            document.write("<br>" + keterangan);
    } else {
        window.alert("Data gagal diunggah!");
    }
}

function resetButton() {
    window.alert("Data form telah direset!");
}
