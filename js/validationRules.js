const validationRules = {
    validEmail: (value) => ({
        isValid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        errorMsg: "Format email tidak valid (contoh: jhon@mail.com)",
        successMsg: "Format email sesuai"
    }),
    confirmPassword: (value, compareValue) => ({
        isValid: value === compareValue,
        errorMsg: "Password tidak cocok",
        successMsg: "Password cocok"
    }),
    minLength: (value, min = 6) => ({
        isValid: value.length >= min,
        errorMsg: `Minimal ${min} karakter`,
        successMsg: "Panjang karakter terpenuhi"
    }),
    maxLength: (value, max = 12) => ({
        isValid: value.length <= max,
        errorMsg: `Maksimal ${max} karakter`,
        successMsg: "Panjang karakter sesuai"
    }),
};