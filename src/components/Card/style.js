import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20rem;
  height: 10rem;
  background-color: ${({ value }) =>
    value === '1'
      ? '#0AA1DD'
      : value === '2'
      ? '#59CE8F'
      : value === '3'
      ? '#F1E0AC'
      : value === '4'
      ? '#98B4AA'
      : value === '5'
      ? '#74959A'
      : '#495371'};
  border-radius: 10px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const CardInfoWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
`
export const CardValue = styled.p`
  font-size: 2.3rem;
  margin: 0 auto;
`
export const CardSubText = styled.p`
  font-size: 1.4rem;
  margin: 0.8rem 0.4rem 0.8rem 0.8rem;
`
export const CardInfoText = styled.p`
  font-size: 1rem;
  margin: 0;
`
export const CardDateText = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 0.8rem;
  margin: 0.6rem;
`
export const CardFavoriteBtn = styled.div`
  position: absolute;
  right: 0px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 1rem;
  &:hover {
    scale: 1.2;
  }
`
