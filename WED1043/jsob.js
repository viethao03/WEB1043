// CLass in JS 
class SinhVIen{
    // creat constructor cho class voi 5 thuoc tinh 
    constructor (masv, ho, ten, namsinh, email) {
        this.masv = masv;
        this.ho = ho;
        this.ten = ten;
        this.namsinh = namsinh;
        this.email = email;
    }

    //create method to caluculage age of a SinhVien
    getAge(){
        const data = new Date();
        let currentyear = date.getFullYear();
        let age = currentYear - this.namsinh;
        return age;
    }
    // method to get full name 
    getFullName(){
        return this.ho +" " + this.ten;
    }
} 
