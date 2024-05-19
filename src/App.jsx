import { TiUserOutline } from "react-icons/ti";
import { MdCreate } from "react-icons/md";
import { CiStickyNote } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";
import { BsGraphUpArrow } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { RiUserLocationFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { BsPhone } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="box-1">
        <div className="image">
          <img
            className="photo"
            height="150"
            width="140"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600 "
          />
        </div>
        <div className="comp">
          <div className="inner">
            <div className="gg">AI Acart</div>
            <div className="sp">
              <div className="row">
                <div>claim Associate|Verginia</div>
                <div>Employee Since 3,2017</div>
                <div>San Digieo,United States</div>
              </div>
              <div className="col">
                <div>
                  <span className="h">
                    <MdMessage />
                  </span>
                  rajanmilie@gmail.com
                </div>
                <div>
                  <span className="ha">
                    <IoIosCall />
                  </span>
                  555-5555-555
                </div>
                <div>
                  <span className="h">
                    <BsPhone />
                  </span>
                  555-5555-555
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="bigbox">
        <div className="box-2">
          <div className="a">
            Profile
            <div>
              <TiUserOutline />
            </div>
          </div>
          <div className="b">
            Employment
            <div>
              <RiUserLocationFill />
            </div>
          </div>
          <div className="c">
            Account
            <div>
              <ImProfile />
            </div>
          </div>
          <div className="d">
            Compensation
            <div>
              <BsGraphUpArrow />
            </div>
          </div>
          <div className="k">
            Documents
            <div>
              <CgFileDocument />
            </div>
          </div>
          <div className="f">
            Notes
            <div>
              <CiStickyNote />
            </div>
          </div>
        </div>
      </div>
      <div className="bigparent">
        <div className="mid">
          <div className="rel1">
            <div className="TP">
              Personal <span className="txt">Details</span>
            </div>
            <div className="icon">
              <MdCreate />
            </div>
          </div>
          <div className="parent">
            <div className="box-3 ">
              <div className="boxing-2">
                <div className="mark"></div>
                <div className="e">
                  <div> Name</div>
                  <div className="hello">AI Acart</div>
                </div>
              </div>
              <div className="boxing-2">
                <div className="mark"></div>
                <div className="e">
                  Birthdate<div className="hello">April 2,1997</div>
                </div>
              </div>
              <div className="boxing-2">
                <div className="mark"></div>
                <div className="e">
                  Marital Status<div className="hello">Single</div>
                </div>
              </div>
            </div>
            <div className="box-4">
              <div className="boxing-2">
                <div className="mark"></div>
                <div className="e">
                  Email<div className="hello">abc@gmail</div>
                </div>
              </div>
              <div className="boxing-2">
                <div className="mark"></div>
                <div className="e">
                  Birthplace<div className="hello">Newyork</div>
                </div>
              </div>
              <div className="boxing-2">
                <div className="mark"></div>
                <div className="e">
                  Marital Date<div className="hello">May 4,2107</div>
                </div>
              </div>
            </div>
            <div className="box-5">
              <div className="boxing-2">
                <div className="mark"></div>
                <div className="e">
                  Gender<div className="hello">Male</div>
                </div>
              </div>
              <div className="boxing-2">
                <div className="mark"></div>
                <div className="e">
                  Nationality<div className="hello">American</div>
                </div>
              </div>
              <div className="boxing-2">
                <div className="mark"></div>
                <div className="e">
                  Spouse Name<div className="hello">AI Dist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <div className="rel2">
            <div className="TP">
              Contact <span className="txt">Details</span>
            </div>
            <div className="icon">
              <MdCreate />
            </div>
          </div>
          <div className="con">
            <div className="yeh">
              <div className="mark"></div>
              <div className="e">
                Home Phone <div className="hello">555-5555-55</div>
              </div>
            </div>

            <div className="yeh">
              <div className="mark"></div>
              <div className="e">
                Mobile Phone <div className="hello">555-5555-55</div>
              </div>
            </div>

            <div className="yeh">
              <div className="mark"></div>
              <div className="e">
                Other Phone <div className="hello">555-5555-55</div>
              </div>
            </div>

            <div className="yeh">
              <div className="mark"></div>
              <div className="e">
                Alternate Email <div className="hello">abc@gmail</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
