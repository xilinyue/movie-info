import request from './index';

const MovieService = {
    addMovie(addForm) {
        return request.post("/api/movie/addMovie",addForm);
    },
    getAllMovies(){
        return request.get("/api/movie/getAllMovie");
    }
};

export  default MovieService;