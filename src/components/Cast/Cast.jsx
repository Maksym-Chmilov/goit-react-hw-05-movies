import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, imgBaseUrl } from 'services/api-movie';
import {
  CastContainer,
  CastList,
  CastItem,
  Img,
  CastDescr,
  CastName,
  CastChar,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCredits);
  }, [movieId]);

  return (
    <CastContainer>
      {credits.length !== 0 ? (
        <CastList>
          {credits.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <Img
                  src={
                    profile_path
                      ? imgBaseUrl.concat(profile_path)
                      : 'https://cdn-icons-png.flaticon.com/512/6386/6386976.png'
                  }
                  alt={name}
                />
                <CastDescr>
                  <CastName>{name}</CastName>
                  <CastChar>Character: {character}</CastChar>
                </CastDescr>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <p>We don`t have any cast for this movie</p>
      )}
    </CastContainer>
  );
};
export default Cast;