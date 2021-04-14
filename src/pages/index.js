import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { StackItem } from "@quarkly/components";
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
		<StackItem height="1000px" color="#000000" background="#ffffff">
			<Text
				width=" 263px"
				height=" 96px"
				margin="63px 0px 16px 325px"
				color="rgba(140, 140, 140, 0.58)"
				font="300 16px --fontFamily-googleRoboto"
				lg-margin="63px 0px 16px 60px"
				md-margin="63px 0px 16px 50"
				sm-margin="750px 0px 16px 15px"
			>
				2004-2021 © Wildberries — модный интернет-магазин одежды, обуви{" "}
				<br />
				и аксессуаров. Все права защищены.
			</Text>
			<Box
				width="210px"
				margin="63px 0px 0px 69px"
				height="350px"
				md-margin="63px 0px 0px 70px"
				sm-margin="63px 0px 0px -260px"
			>
				<Text height="18px" color="#000000" font="400 16px --fontFamily-googleRoboto" margin="0 0px 16px 0px">
					Покупателям
				</Text>
				<Text
					color="rgba(0, 0, 0, 0.58)"
					font="300 16px/120% --fontFamily-googleRoboto"
					width="204.95px"
					height="300px"
					margin="20px 0px 16px 0px"
				>
					Как сделать заказ{"\n"}
					<br />
					<br />
					Способы оплаты{"\n"}
					<br />
					<br />
					Доставка{"\n"}
					<br />
					<br />
					Возврат товара{"\n"}
					<br />
					<br />
					Возврат денежных средств{"\n"}
					<br />
					<br />
					Правила продажи{"\n"}
					<br />
					<br />
					Правила пользования торговой площадкой{"\n"}
					<br />
					<br />
					Вопросы и ответы
				</Text>
			</Box>
			<Box
				width="210px"
				margin="63px 0px 0px 69px"
				height="350px"
				md-margin="500px 0px 0px -212px"
				sm-margin="63px 0px 0px 20px"
			>
				<Text color="#000000" font="400 16px --fontFamily-googleRoboto" height="18px" margin="0 0px 16px 0px">
					Партнерам
				</Text>
				<Text
					color="rgba(0, 0, 0, 0.58)"
					font="300 16px/120% --fontFamily-googleRoboto"
					width="204.95px"
					height="300px"
					margin="20px 0px 16px 0px"
				>
					Партнерская программа{"\n"}
					<br />
					<br />
					Как начать сотрудничество{"\n"}
					<br />
					<br />
					Преимущества{"\n"}
					<br />
					<br />
					Франшиза{"\n"}
				</Text>
			</Box>
			<Box
				width="210px"
				margin="63px 325px 0px 69px"
				height="350px"
				lg-margin="500px 0px 0px -820px"
				md-margin="500px 0px 0px -540px"
				sm-margin="500px 0px 0px -440px"
			>
				<Text color="#000000" font="400 16px --fontFamily-googleRoboto" height="18px" margin="0 0px 16px 0px">
					Компания
				</Text>
				<Text
					color="rgba(0, 0, 0, 0.58)"
					font="300 16px/120% --fontFamily-googleRoboto"
					width="204.95px"
					height="300px"
					margin="20px 0px 16px 0px"
				>
					О нас{"\n"}
					<br />
					<br />
					Реквизиты{"\n"}
					<br />
					<br />
					Пресс-центр{"\n"}
					<br />
					<br />
					Контакты{"\n"}
				</Text>
			</Box>
		</StackItem>
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