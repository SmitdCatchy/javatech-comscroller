-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2018. Jan 15. 19:19
-- Kiszolgáló verziója: 10.1.26-MariaDB
-- PHP verzió: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `comscroller`
--


-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `modules`
--

CREATE TABLE `modules` (
  `id` int(10) UNSIGNED NOT NULL,
  `owner` int(11) NOT NULL,
  `name` varchar(200) COLLATE utf8_bin NOT NULL,
  `type` varchar(10) COLLATE utf8_bin NOT NULL,
  `description` varchar(200) COLLATE utf8_bin NOT NULL,
  `image` varchar(200) COLLATE utf8_bin NOT NULL,
  `startscene` int(11) NOT NULL,
  `isPublic` tinyint(1) NOT NULL,
  `finished` tinyint(1) NOT NULL,
  `approved` tinyint(1) NOT NULL,
  `approvedBy` int(11) NOT NULL,
  `published` date NOT NULL,
  `views` int(11) NOT NULL,
  `rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- A tábla adatainak kiíratása `modules`
--

INSERT INTO `modules` (`id`, `owner`, `name`, `type`, `description`, `image`, `startscene`, `isPublic`, `finished`, `approved`, `approvedBy`, `published`, `views`, `rate`) VALUES
(1, 1, 'Graph', 'Comic', 'Test for everything', 'images/cms_logo.png', 1, 1, 0, 0, 1, '2018-01-12', 0, 0)

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `sceneobjects`
--

CREATE TABLE `sceneobjects` (
  `id` int(11) NOT NULL,
  `sId` int(11) NOT NULL,
  `type` varchar(3) COLLATE utf8_bin NOT NULL,
  `action` varchar(200) COLLATE utf8_bin NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `w` int(11) NOT NULL,
  `h` int(11) NOT NULL,
  `z` int(11) NOT NULL,
  `cont` varchar(10000) COLLATE utf8_bin NOT NULL,
  `style` varchar(500) COLLATE utf8_bin NOT NULL,
  `event` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- A tábla adatainak kiíratása `sceneobjects`
--

INSERT INTO `sceneobjects` (`id`, `sId`, `type`, `action`, `x`, `y`, `w`, `h`, `z`, `cont`, `style`, `event`) VALUES
(1, 1, 'txt', 'click:scene:2:swipe-right:swipe-out-right', 261, 340, 400, 400, 0, 'RED', 'background:#F00;\ncolor:#FFF;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(2, 2, 'txt', 'click:scene:5:swipe-up:swipe-out-up', 460, 340, 400, 400, 0, 'YELLOW', 'background:#FF0;\ncolor:#000;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(3, 3, 'txt', 'click:scene:5:swipe-right:swipe-out-right', 461, 340, 400, 400, 0, 'YELLOW', 'background:#FF0;\ncolor:#000;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(4, 4, 'txt', 'click:scene:6:swipe-up:swipe-out-up', 1061, 340, 400, 400, 0, 'CORAL', 'background:#0FF;\ncolor:#000;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(5, 5, 'txt', 'click:scene:8:swipe-left:swipe-out-left', 760, 340, 400, 400, 0, 'WHITE', 'background:#FFF;\ncolor:#000;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(6, 6, 'txt', 'click:scene:8:swipe-right:swipe-out-right', 760, 340, 400, 400, 0, 'WHITE', 'background:#FFF;\ncolor:#000;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(7, 7, 'txt', 'click:scene:8:swipe-up:swipe-out-up', 760, 340, 400, 400, 0, 'WHITE', 'background:#FFF;\ncolor:#000;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(8, 1, 'txt', 'click:scene:3:swipe-up:swipe-out-up', 760, 340, 400, 400, 0, 'GREEN', 'background:#0F0;\ncolor:#FFF;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(9, 1, 'txt', 'click:scene:4:swipe-left:swipe-out-left', 1259, 340, 400, 400, 0, 'BLUE', 'background:#00F;\ncolor:#FFF;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(10, 4, 'txt', 'click:scene:7:swipe-right:swipe-out-right', 461, 340, 400, 400, 0, 'PINK', 'background:#F0F;\ncolor:#FFF;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(11, 2, 'txt', 'click:scene:7:swipe-left:swipe-out-left', 1061, 340, 400, 400, 10, 'PINK', 'background:#F0F;\ncolor:#FFF;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(12, 3, 'txt', 'click:scene:6:swipe-left:swipe-out-left', 1061, 340, 400, 400, 10, 'CORAL', 'background:#0FF;\ncolor:#000;\ntext-shadow: 0 0 5px #000;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(13, 8, 'txt', 'click:scene:1:swipe-down:swipe-out-down', 760, 340, 400, 400, 0, 'BLACK', 'background:#000;\ncolor:#FFF;\ntext-shadow: 0 0 5px #FFF;\nfont-size: 60px;\nborder-radius:50%;', '1'),
(14, 9, 'txt', 'click:scene:1:none:none', 860, 440, 200, 200, 0, 'I\nam \nlonely\n:(', 'background:#AAA;color:#000;border-radius:50%;text-align:center;', '1'),
(15, 10, 'txt', 'none', 760, 340, 400, 400, 0, 'asdasd+\"-\'', 'background:#AAA0;color:#0000;border-radius:0%;', '1'),
(16, 1, 'txt', 'click:scene:10:swipe-down:swipe-out-down', 860, 980, 200, 200, 10, 'NOT A COLOR\n\n\n', 'background:#33333306;color:#FFFFFF06;border-radius:50%;\ntext-align: center;', '1'),

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `scenes`
--

CREATE TABLE `scenes` (
  `id` int(11) NOT NULL,
  `mId` int(11) NOT NULL,
  `background` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- A tábla adatainak kiíratása `scenes`
--

INSERT INTO `scenes` (`id`, `mId`, `background`) VALUES
(1, 1, '#000'),
(2, 1, '#F00'),
(3, 1, '#0F0'),
(4, 1, '#00F'),
(5, 1, '#FF0'),
(6, 1, '#0FF'),
(7, 1, '#F0F'),
(8, 1, '#FFF'),
(9, 1, '#000'),
(10, 1, 'https://i.giphy.com/media/I2sZ6qckkhfLG/giphy.webp'),

--
-- Indexek a kiírt táblákhoz
--
--
-- A tábla indexei `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- A tábla indexei `sceneobjects`
--
ALTER TABLE `sceneobjects`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `scenes`
--
ALTER TABLE `scenes`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--
--
-- AUTO_INCREMENT a táblához `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `sceneobjects`
--
ALTER TABLE `sceneobjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT a táblához `scenes`
--
ALTER TABLE `scenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
