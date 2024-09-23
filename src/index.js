import ErrorRepository from './js/ErrorRepository';

const errorRepo = new ErrorRepository();
console.log(errorRepo.translate(404));
console.log(errorRepo.translate(700));
