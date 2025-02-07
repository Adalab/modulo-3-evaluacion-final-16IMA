import PropTypes from "prop-types";

function MovieYearList({ movie, handleSelectFilterYear }) {
    const uniqueYears = [...new Set(movie.map(i => i.year))];
    console.log(uniqueYears)
    return (
        <select name="year" id="year-select" onInput={handleSelectFilterYear}>
            <option value="">All</option>
            {uniqueYears.map((oneYear) => (
                <option key={oneYear} value={oneYear}>{oneYear}</option>
            ))}
        </select>
    );
}

MovieYearList.propTypes = {
    movie: PropTypes.array,
};

export default MovieYearList;