import React from 'react'
import { ConnectedGridBox } from './gridBox'

const CrosswordGrid = ({ gridInfo }) => {
  return (
    <div id="wrapper">
      {gridInfo.length > 0 ? gridInfo.map(box => <ConnectedGridBox boxId={box.id} boxType={box.type} />) : null}
    </div>
  )
}

export default CrosswordGrid

{/* <div id="wrapper"> */}
  {/* row 1 */}
  // <div className="empty numbered" id="1"></div>
  // <div className="empty" id="2"></div>
  // <div className="empty" id="3"></div>
  // <div className="empty" id="4"></div>
  // <div className="empty numbered" id="5"></div>
  // <div className="filled" id="6"></div>
  // <div className="filled" id="7"></div>
  // <div className="filled" id="8"></div>
  {/* row 2 */}
  // <div className="filled" id="9"></div>
  // <div className="filled" id="10"></div>
  // <div className="filled" id="11"></div>
  // <div className="filled" id="12"></div>
  // <div className="empty" id="13"></div>
  // <div className="filled" id="14"></div>
  // <div className="filled" id="15"></div>
  // <div className="filled" id="16"></div>
  {/* row 3 */}
  // <div className="filled" id="17"></div>
  // <div className="filled" id="18"></div>
  // <div className="filled" id="19"></div>
  // <div className="filled" id="20"></div>
  // <div className="empty" id="21"></div>
  // <div className="filled" id="22"></div>
  // <div className="filled" id="23"></div>
  // <div className="filled" id="24"></div>
  {/* row 4 */}
  // <div className="filled" id="25"></div>
  // <div className="filled" id="26"></div>
  // <div className="filled" id="27"></div>
  // <div className="filled" id="28"></div>
  // <div className="empty" id="29"></div>
  // <div className="filled" id="30"></div>
  // <div className="filled" id="31"></div>
  // <div className="filled" id="32"></div>
  {/* row 5 */}
  // <div className="filled" id="33"></div>
  // <div className="filled" id="34"></div>
  // <div className="empty numbered" id="35"></div>
  // <div className="empty" id="36"></div>
  // <div className="empty" id="37"></div>
  // <div className="filled" id="38"></div>
  // <div className="filled" id="39"></div>
  // <div className="filled" id="40"></div>
  {/* row 6 */}
  // <div className="filled" id="41"></div>
  // <div className="filled" id="42"></div>
  // <div className="empty" id="43"></div>
  // <div className="filled" id="44"></div>
  // <div className="filled" id="45"></div>
  // <div className="filled" id="46"></div>
  // <div className="filled" id="47"></div>
  // <div className="filled" id="48"></div>
  {/* row 7 */}
  // <div className="filled" id="49"></div>
  // <div className="filled" id="50"></div>
  // <div className="empty" id="51"></div>
  // <div className="filled" id="52"></div>
  // <div className="filled" id="53"></div>
  // <div className="filled" id="54"></div>
  // <div className="filled" id="55"></div>
  // <div className="filled" id="56"></div>
  {/* row 8 */}
  // <div className="filled" id="57"></div>
  // <div className="filled" id="58"></div>
  // <div className="empty" id="59"></div>
  // <div className="filled" id="60"></div>
  // <div className="filled" id="61"></div>
  // <div className="filled" id="62"></div>
  // <div className="filled" id="63"></div>
  // <div className="filled" id="64"></div>
  {/* row 9 */}
  // <div className="filled" id="65"></div>
  // <div className="filled" id="66"></div>
  // <div className="empty numbered" id="67"></div>
  // <div className="empty" id="68"></div>
  // <div className="empty" id="69"></div>
  // <div className="empty" id="70"></div>
  // <div className="empty numbered" id="71"></div>
  // <div className="filled" id="72"></div>
  {/* row 10 */}
  // <div className="filled" id="73"></div>
  // <div className="filled" id="74"></div>
  // <div className="filled" id="75"></div>
  // <div className="filled" id="76"></div>
  // <div className="filled" id="77"></div>
  // <div className="filled" id="78"></div>
  // <div className="empty" id="79"></div>
  // <div className="filled" id="80"></div>
  {/* row 11 */}
  // <div className="filled" id="81"></div>
  // <div className="filled" id="82"></div>
  // <div className="filled" id="83"></div>
  // <div className="filled" id="84"></div>
  // <div className="empty numbered" id="85"></div>
  // <div className="empty" id="86"></div>
  // <div className="empty" id="87"></div>
  // <div className="filled" id="88"></div>
  {/* row 12 */}
  // <div className="filled" id="89"></div>
  // <div className="filled" id="90"></div>
  // <div className="filled" id="91"></div>
  // <div className="filled" id="92"></div>
  // <div className="empty" id="93"></div>
  // <div className="filled" id="94"></div>
  // <div className="filled" id="95"></div>
  // <div className="filled" id="96"></div>
  {/* row 13 */}
  // <div className="filled" id="97"></div>
  {/* <div className="filled" id="98"></div> */}
  {/* <div className="filled" id="99"></div> */}
  {/* <div className="filled" id="100"></div> */}
  {/* <div className="empty" id="101"></div> */}
  {/* <div className="filled" id="102"></div> */}
  {/* <div className="filled" id="103"></div> */}
  {/* <div className="filled" id="104"></div> */}
  {/* row 14 */}
  // <div className="filled" id="105"></div>
  {/* <div className="filled" id="106"></div> */}
  {/* <div className="filled" id="107"></div> */}
  {/* <div className="filled" id="108"></div> */}
  {/* <div className="empty" id="109"></div> */}
  {/* <div className="filled" id="110"></div> */}
  {/* <div className="filled" id="111"></div> */}
  {/* <div className="filled" id="112"></div> */}
  {/* row 15 */}
  // <div className="empty numbered" id="113"></div>
  {/* <div className="empty" id="114"></div> */}
  {/* <div className="empty" id="115"></div> */}
  {/* <div className="empty" id="116"></div> */}
  {/* <div className="empty" id="117"></div> */}
  {/* <div className="empty" id="118"></div> */}
  {/* <div className="empty" id="119"></div> */}
  {/* <div className="empty" id="120"></div> */}
// </div>
