import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionsWrapper } from './style'

const SearchSections = memo((props) => {
  const {searchInfos} = props

  return (
    <SectionsWrapper>
      {searchInfos.map(item => (
        <div key={item.desc} className="item">
          <div className="info">
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </div>
          <div className="divider"></div>
        </div>
      ))}
    </SectionsWrapper>
  )
})

SearchSections.propTypes = {
  searchInfos: PropTypes.array
}

export default SearchSections