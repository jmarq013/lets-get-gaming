import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  background: #edeef0;
  padding-top: 10px;

  div {
    display: flex;
    margin: 0 auto;
    width: 1240px;
  }

  div section:nth-of-type(1) {
    flex: 350px;
    margin-right: 20px;
  }

  div section:nth-of-type(2) {
    flex: 660px;
  }

  div section:nth-of-type(3) {
    flex: 350px;
    margin-left: 20px;
  }
`;

export default function MainContent() {
  return (
    <Main>
      <div>
        <section style={{background: 'red'}}><iframe src="https://discordapp.com/widget?id=225520083789676544&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></section>
        <section style={{background: 'blue'}}>
          <iframe
            src="https://player.twitch.tv/?channel=dallas&parent=streamernews.example.com&muted=true"
            height="400"
            width="660"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true">
          </iframe>
        </section>
        <section style={{background: 'green'}}>Test</section>
      </div>
    </Main>
  )
}
