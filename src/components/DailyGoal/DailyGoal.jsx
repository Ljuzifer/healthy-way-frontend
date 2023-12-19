import React from 'react';
import {
  BodyTextFirst,
  BodyTextWrap,
  HeadlineSecond,
  HeadlineThird,
  IconWrap,
  SubtitleFirst,
  WrapMainBg,
} from '../StyledComponents/Components.styled';
import { List } from './DailyGoal.styled';
import sprite from 'assets/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/auth/selectors';

export default function DailyGoal() {
  const { baseWater, BMR: caloriesDayGoal } = useSelector(selectUserInfo);

  const waterDayGoal = baseWater * 1000;

  return (
    <>
      <HeadlineSecond>Daily goal</HeadlineSecond>
      <WrapMainBg>
        <List>
          <li>
            <IconWrap width="80px" height="80px" stroke="var(--green)">
              <use href={`${sprite}#bubble`} />
            </IconWrap>
            <div>
              <HeadlineThird color="var(--grey-light)">Calories</HeadlineThird>
              <SubtitleFirst>{caloriesDayGoal}</SubtitleFirst>
            </div>
          </li>
          <li>
            <IconWrap width="80px" height="80px" stroke="var(--violet)">
              <use href={`${sprite}#water`} />
            </IconWrap>
            <div>
              <HeadlineThird color="var(--grey-light)">Water</HeadlineThird>
              <BodyTextWrap>
                <SubtitleFirst>{waterDayGoal}</SubtitleFirst>
                <BodyTextFirst color="var(--grey-light)">ml</BodyTextFirst>
              </BodyTextWrap>
            </div>
          </li>
        </List>
      </WrapMainBg>
    </>
  );
}
