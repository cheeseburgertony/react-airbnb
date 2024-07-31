import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props
  let showName = '显示全部'
  if (name) {
    showName = `显示更多${name}房源`
  }

  const navigate = useNavigate()
  const moreClickHandle = () => {
    navigate('/entire')
  }

  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className="info" onClick={moreClickHandle}>
        <span className='text'>{showName}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter