import { Button } from '../Button'
import './HomePage.scss'

const CN = 'HomePage'

const click = () => console.log('click')

export const HomePage = () => {
  return (
    <div className={CN}>
      <div className={`${CN}--content_wrapper`}>
        <h2>parameters</h2>
        <ul>
          <li>battery: 26%</li>
          <li>temperature: 26&deg;C</li>
          <li>last modification: 0 seconds ago</li>
        </ul>
      </div>
      <div className={`${CN}--button_wrapper`}>
        <Button
          content="start"
          onClickAction={click}
          isOutline
          buttonIcon="start"
        />
        <Button
          content="stop"
          onClickAction={click}
          isOutline
          buttonIcon="stop"
        />
        <Button content="shutdown" onClickAction={click} className="shutdown" />
        <Button
          content="cancel shutdown"
          onClickAction={click}
          className="cancel-shutdown"
        />
      </div>
    </div>
  )
}
