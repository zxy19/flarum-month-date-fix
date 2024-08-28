# Month Date Fix

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/xypp/flarum-month-date-fix.svg)](https://packagist.org/packages/xypp/flarum-month-date-fix) [![Total Downloads](https://img.shields.io/packagist/dt/xypp/flarum-month-date-fix.svg)](https://packagist.org/packages/xypp/flarum-month-date-fix)

A [Flarum](http://flarum.org) extension. 替换所有日期格式 'D MMM' 为语言文件中的.

设计用于解决中文日期格式问题.(应该是 1月1日 而不是 of 1 1月)

## 本扩展可能会以意想不到的方式破坏许多其他扩展行为。在安装前请先测试。

## Installation

Install with composer:

```sh
composer require xypp/flarum-month-date-fix:"*"
```

## Updating

```sh
composer update xypp/flarum-month-date-fix:"*"
php flarum cache:clear
```

## Links

- [Packagist](https://packagist.org/packages/xypp/flarum-month-date-fix)
- [GitHub](https://github.com/zxy19/flarum-month-date-fix)
