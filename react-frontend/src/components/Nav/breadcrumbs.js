import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import '../../css/breadcrumbs.css';

const routeDisplayNames = {
  resources: 'Resources',
  'products-services': 'Products and Services',
  'digital-framework': 'Digital Framework',
  'case-studies': 'Case Studies',
};
const BreadCrumbs = () => {
  const history = useHistory();
  const routeLocation = useLocation();
  const [pathName, setPathName] = useState(routeLocation.pathname);

  useEffect(() => {
    return history.listen((location) => {
      setPathName(location.pathname);
    });
  });

  if (pathName === '/') {
    return null;
  }

  let displayName = pathName.replace('/', '');

  //no paths exist yet that are more than one path deep, if this occurs then we can add a split function using / to populate .options

  let crumbs = (
    <div>
      <ul className="options">
        <li className="listOption">
          <Link to="/">Home</Link>
        </li>
        <li className="listOption">/</li>
        <li className="listOption">
          <Link to={pathName}>{routeDisplayNames[displayName]}</Link>
        </li>
      </ul>
    </div>
  );

  return <div className="breadCrumbs">{crumbs}</div>;
};

export default BreadCrumbs;