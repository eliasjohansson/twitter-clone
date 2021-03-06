import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import reactStringReplace from 'react-string-replace';
import { NavLink } from 'react-router-dom';

const replaceEntityStrings = (text) => {
  let replacedText;
  // Replace Hashtags
  replacedText = reactStringReplace(text, /#(\w+)/g, (match, i) => (
    <Entity key={`hashtag-${i}`} to={`/hashtag/${match}`}>
      #<span>{match}</span>
    </Entity>
  ));
  // Replace and shorten URL's
  replacedText = reactStringReplace(replacedText, /(https?:\/\/\S+)/g, (match, i) => {
    const url = match.replace(/(^\w+:|^)\/\//, '');
    const urlSubstr = url.substring(0, 30);
    return (
      <URL key={`url-${i}`} href={match}>
        <span>
          {urlSubstr}
          {url.length > 30 && '...'}
        </span>
      </URL>
    );
  });
  // Replace Mentions
  replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
    <Entity key={`mention-${i}`} to={`/${match}`}>
      @<span>{match}</span>
    </Entity>
  ));
  return replacedText;
};

const Content = ({ data }) => <StyledContent>{replaceEntityStrings(data.text)}</StyledContent>;

Content.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
};

// Style
const StyledContent = styled.div`
  font-size: 14px;
  line-height: 20px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  padding-right: 20px;
`;

const Entity = styled(NavLink)`
  color: #1b95e0;
  font-weight: normal;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    span {
      text-decoration: underline;
    }
  }
`;

const URL = Entity.withComponent('a');

export default Content;
