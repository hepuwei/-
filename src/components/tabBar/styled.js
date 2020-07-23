import styled from "styled-components";

export const TabBarContainer = styled.div`
	width:100%;
	height:.43rem;
	position:fixed;
	left:0;
	bottom:0;
	font-size:16px;
	background-color: #fff;
	border-top:1px solid #ccc;
	ul{
		display:flex;
		justify-content:space-around;
		align-items:center;
		.active{
			color:#c33;
		}
		a{
			display:flex;
			flex-direction:column;
			justify-content:space-around;
			align-items:center;
			i{
				font-size:20px;
			}
			span{
				font-size:14px;
			}
		}
	}
`