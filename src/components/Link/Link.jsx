import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 p-2 hover:bg-blue-300">
            <a href={route.path} >{route.name} </a>
        </li>
    );
};

Link.PropTypes = {
    route: PropTypes.object
}

export default Link;