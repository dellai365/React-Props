import './../App.css';
import PropTypes from 'prop-types';
const Profile = (props) => {
    console.log(props)
    const Propn = (e) => {
        e.preventDefault();
        alert(props.Fn)
    }


    return (
        <div className="main-page" >
            <h3 onClick={Propn} > {props.Fn} </h3>
            <h3> {props.Bio} </h3>
            <h3> {props.Profession} </h3>
            <div> {props.children} </div>
        </div>

    );
}
Profile.defaultProps = {
    Fn: "Dellai Mohamed Ali",
    Bio: "Mind your own bio",
    Profession: "isi student",
}
Profile.propTypes = {
    Fn: PropTypes.string,
    Bio: PropTypes.string,
    Profession: PropTypes.string,
    Propn: PropTypes.func,

}

export default Profile;