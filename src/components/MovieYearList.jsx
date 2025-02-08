import PropTypes from "prop-types";

function MovieYearList({ movie, handleSelectFilterYear }) {
    const uniqueYears = [...new Set(movie.map(i => i.year))];
    
    return (
        <select name="year" id="year-select" onChange={handleSelectFilterYear}>
            <option value="">All</option>
            {uniqueYears.sort().map((oneYear) => (
                <option key={oneYear} value={oneYear}>{oneYear}</option>
            ))}
        </select>
    );
}

MovieYearList.propTypes = {
    movie: PropTypes.array,
    handleSelectFilterYear: PropTypes.func,
};

export default MovieYearList;