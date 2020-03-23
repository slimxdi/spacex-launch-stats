import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import LaunchItem from '../Components/LaunchItem'
import MissionKey from '../Components/MissionKey'

const LAUNCHES_QUERY = gql
`
  query LaunchesQuery{
    launches{
      flight_number,
      mission_name,
      launch_year,
      launch_success,
      launch_date_local,
      rocket{
        rocket_id,
        rocket_name,
        rocket_type
      }
    },
  }`;

function Launches(){
  const {loading, error, data} = useQuery(LAUNCHES_QUERY);
  if(loading) return <h4>Loading...</h4>;
  if(error) console.log(error);
  return(

    <Fragment>
    <h1 className="display-4 my-3">Launches</h1>
    <MissionKey/>
    {
      data.launches.map(launch => (
        <LaunchItem key={launch.flight_number} launch={launch}/>
      ))
    }
    </Fragment>
  );
}

export default Launches;
