import Swal from 'sweetalert2'

export const swal = Swal.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-primary',
    denyButton: 'btn btn-warning',
    cancelButton: 'btn btn-outline-secondary ms-2',
    popup: 'rounded-3',
  },
})

export const alertSuccess = (text, title = 'Thành công') =>
  swal.fire({ icon: 'success', title, text })

export const alertError = (text, title = 'Lỗi') =>
  swal.fire({ icon: 'error', title, text })

export const alertInfo = (text, title = 'Thông báo') =>
  swal.fire({ icon: 'info', title, text })

export const alertWarning = (text, title = 'Cảnh báo') =>
  swal.fire({ icon: 'warning', title, text })

export const confirmAction = ({
  title = 'Bạn chắc chắn?',
  text = 'Hành động này không thể hoàn tác',
  confirmText = 'Xác nhận',
  cancelText = 'Huỷ',
}) =>
  swal.fire({
    icon: 'question',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
  })


