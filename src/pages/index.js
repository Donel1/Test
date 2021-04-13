import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Image width="388.32px" height="388.32px" src="https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Rectangle%2014%20(1).png?v=2021-04-13T16:48:38.504Z" margin="91.35px 0px 0px 148.74px" />
		<Box
			width="383.32px"
			height="241.15px"
			margin="-15px 0px 0px 149.74px"
			border-color="#EFEFEF"
			border-width="1px"
			border-style="solid"
			border-radius="10px"
		>
			<Text font="700 24px --fontFamily-googleRoboto" margin="50px 0px 16px 50px" width="80px">
				5 490р
			</Text>
			<Text
				font="400 18px --fontFamily-googleRoboto"
				width="55px"
				margin="-42px 0px 16px 140px"
				color="#8F8F8F"
				text-decoration-line="line-through"
			>
				6 190р
			</Text>
			<Text width="40px" font="500 18px --fontFamily-googleRoboto" margin="-37px 0px 16px 223px" color="#EC7623">
				-10%
			</Text>
			<Box
				width="65.29px"
				height="34.29px"
				color="#FDF1E9"
				background="#FDF1E9"
				border-radius="5px"
				margin="-43px 0px 0px 211px"
			/>
			<Text width="300px" margin="25px 0px 16px 50px" font="350 16px/150% sans-serif">
				Двухъярусный торт с подтеками шоколада и свежими ягодами
			</Text>
			<Text width="300px" margin="25px 0px 16px 50px" font="350 16px/150% sans-serif" color="#36CB84">
				Доставка завтра
			</Text>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});