console.log('welcome to javascript 36 exercise solution');

class Library{
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }
    getBookList(){
        this.getBookList.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookname , user){
        if(this.issuedBooks[bookname] == undefined){
            this.issuedBooks[bookname] = user;
        }else{
            console.log('This book is already issued');
        }
    }
    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }

}