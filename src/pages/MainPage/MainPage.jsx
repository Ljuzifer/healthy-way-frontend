import React, { useState } from 'react';
import { FeatureWrap, TitleWrap } from './MainPage.styled';

import { Container } from 'components/StyledComponents/Container';
import {
  IconWrap,
  ButtonTextSecond,
  HeadlineFirst,
  StyledLink,
} from 'components/StyledComponents/Components.styled';
import sprite from 'assets/sprite.svg';

import DailyGoal from 'components/DailyGoal/DailyGoal';
import Water from 'components/Water/Water';
import Food from 'components/Food/Food';
import Diary from 'components/Diary/Diary';
import RecommendedFood from 'components/RecommendedFood/RecommendedFood';
import { Button } from '../../components/StyledComponents/Components.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { logOut } from '../../redux/auth/operations';

export default function MainPage() {
  // const [modalRecordDiaryActive, setModalRecordDiaryActive] = useState(false);
  // const [modalWaterActive, setModalWaterActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  if (modalActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  // TODO видалити потім, коли буде можливість вийти в хедері
  const dispatch = useDispatch();
  const handleOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      toast.success('You have successfully logged out!');
    } catch (error) {
      toast.error('Something went wrong !');
    }
  };

  return (
    <main>
      <Container>
        <TitleWrap>
          <HeadlineFirst>Today</HeadlineFirst>
          <StyledLink to="/dashboard">
            <ButtonTextSecond>On the way to the goal</ButtonTextSecond>
            <IconWrap width="16px" height="16px">
              <use href={`${sprite}#arrow-right`} />
            </IconWrap>
          </StyledLink>
        </TitleWrap>
        <FeatureWrap>
          <li>
            <DailyGoal></DailyGoal>
          </li>
          <li>
            <Water
              modalActive={modalActive}
              setModalActive={setModalActive}
            ></Water>
          </li>
          <li>
            <Food></Food>
          </li>
          <li>
            <Diary></Diary>
          </li>
          <li>
            <RecommendedFood></RecommendedFood>
          </li>
        </FeatureWrap>
        <Button type="submit" onClick={() => handleOut()}>
          Sign out
        </Button>
      </Container>
    </main>
  );
}
