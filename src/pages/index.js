import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
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
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Stack margin-top="40px">
				<StackItem
					width="25%"
					lg-width="30%"
					sm-width="50%"
					lg-padding="0 0 0 0"
					md-padding="16px 16px 16px 16px"
					sm-height="415px"
					sm-padding="40px 16px 16px 16px"
				>
					<Override slot="StackItemContent" flex-direction="column" lg-padding="16px 0px 0px 0px" md-padding="0 0px 0px 0px" />
					<Text
						margin="0 10px 0px 0"
						color="rgba(140, 140, 140, 0.58)"
						font="300 16px --fontFamily-googleRoboto"
						lg-margin="0 0px 16px 0"
						sm-margin="0 0px 16px 15px"
					>
						2004-2021 © Wildberries — модный интернет-магазин одежды, обуви{" "}
						<br />
						и аксессуаров. Все права защищены.
					</Text>
				</StackItem>
				<StackItem width="15%" lg-width="30%" sm-width="50%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text height="18px" color="#000000" font="400 16px --fontFamily-googleRoboto" margin="0 0px 16px 0px">
						Покупателям
					</Text>
					<Text color="rgba(0, 0, 0, 0.58)" font="300 16px/120% --fontFamily-googleRoboto" margin="10px 0px 16px 0px">
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
						Возврат денежных{" "}
						<br />
						средств{"\n"}
						<br />
						<br />
						Правила продажи{"\n"}
						<br />
						<br />
						Правила пользования{" "}
						<br />
						торговой площадкой{"\n"}
						<br />
						<br />
						Вопросы и ответы
					</Text>
				</StackItem>
				<StackItem width="20%" lg-width="30%" sm-width="50%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="#000000" font="400 16px --fontFamily-googleRoboto" height="18px" margin="0 0px 16px 0px">
						Партнерам
					</Text>
					<Text color="rgba(0, 0, 0, 0.58)" font="300 16px/120% --fontFamily-googleRoboto" margin="10px 0px 16px 0px">
						Партнерская программа{"\n"}
						<br />
						<br />
						Как начать{" "}
						<br />
						сотрудничество{"\n"}
						<br />
						<br />
						Преимущества{"\n"}
						<br />
						<br />
						Франшиза{"\n"}
					</Text>
				</StackItem>
				<StackItem width="15%" lg-width="30%" sm-width="50%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="#000000" font="400 16px --fontFamily-googleRoboto" height="18px" margin="0 0px 16px 0px">
						Компания
					</Text>
					<Text color="rgba(0, 0, 0, 0.58)" font="300 16px/120% --fontFamily-googleRoboto" margin="10px 0px 16px 0px" width="204.95px">
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
				</StackItem>
				<StackItem width="15%" lg-width="30%" sm-width="50%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="#000000" font="400 16px --fontFamily-googleRoboto" height="18px" margin="0 0px 16px 0px">
						Другое
					</Text>
					<Text color="rgba(0, 0, 0, 0.58)" font="300 16px/120% --fontFamily-googleRoboto" margin="10px 0px 16px 0px" width="204.95px">
						Детям
						<br />
						<br />
						ЗОЖ и спорт
						<br />
						<br />
						Online журнал
						<br />
						<br />
						Wb.team
						<br />
						<br />
						Перевозчикам
						<br />
						<br />
						Модный блог
						<br />
						<br />
						Энциклопедия моды
					</Text>
				</StackItem>
				<StackItem width="5%" lg-width="30%" sm-width="50%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Image width="40px" height="40px" src="https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Vector.svg?v=2021-04-14T22:29:07.516Z" margin="0px 0px 16px 0px" />
					<Image width="40px" height="40px" src="https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Vector-1.svg?v=2021-04-14T22:29:07.516Z" margin="0px 0px 16px 0px" />
					<Image width="40px" height="40px" src="https://uploads.quarkly.io/6075c8436de461001eb86de1/images/Group%20181.svg?v=2021-04-14T22:29:07.511Z" margin="0px 0px 16px 0px" />
				</StackItem>
			</Stack>
		</Section>
		<Section>
			<StackItem />
		</Section>
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