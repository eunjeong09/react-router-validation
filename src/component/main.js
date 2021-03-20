function Main(props) {
    console.log(props.myRole);
  
    return (
        <div>
            <h2>권한을 확인하세요. 현재 권한 : {props.myRole} 
            </h2>
            <p>위의 버튼 클릭시, 권한에 맞는 페이지가 출력됩니다.</p>

        </div>
    )
  }
  export default Main;
