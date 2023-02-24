import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../Hooks/useFetch';
import { BackButton } from './styles/Country.styled';
import { ReactComponent as LeftIcon } from '../Assets/left-arrow.svg';
import styled from "styled-components";

const PageSection = styled.section`
  h1 {
    margin-top: 50px;
    text-align: center;
  }
`

const Page404 = () => {
  const { error } = useFetch();
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state);

  return (
    <PageSection>
      <BackButton 
        color={ darkMode ? "white" : "black" }
        onClick={() => { navigate(`/`) }}
      >
      <LeftIcon className="left-icon"/>
        Back
      </BackButton>

      <h1>No country founded</h1>
      {error ? <p>{error}</p> : null}
    </PageSection>
  )
}

export default Page404;