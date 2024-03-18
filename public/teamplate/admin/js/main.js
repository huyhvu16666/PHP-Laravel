$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
function removeRow(id, url) {
    if (confirm('Xóa mà không thể khôi phục. Bạn có chắc ?')) {
        $.ajax({
            type: 'DELETE',
            dataType: 'JSON',
            data: { id:id },
            url: url,
            success: function(result) {
               if(result.error==false){             
                alert(result.message);
                location.reload();
               } else{
                alert('Xóa lỗi vui lòng thử lại');
               }
            }
        });
    }
}
//upload file
$('#upload').change(function() {
    const form = new FormData();
    form.append('file', $(this)[0].files[0]);
    $.ajax({
        processData: false,
        contentType: false,
        type: 'POST',
        dataType: 'JSON',
        data: form,
        url: '/admin/upload/services',
        success: function(results) {
            console.log(results);
        }
    });
});