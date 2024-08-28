# Month Date Fix

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/xypp/flarum-month-date-fix.svg)](https://packagist.org/packages/xypp/flarum-month-date-fix) [![Total Downloads](https://img.shields.io/packagist/dt/xypp/flarum-month-date-fix.svg)](https://packagist.org/packages/xypp/flarum-month-date-fix)

A [Flarum](http://flarum.org) extension. Replace all date format of 'D MMM' with customized format in locale files.

Design to resolve the issue of 'D MMM' format in Chinese.(should be 1月1日 instead of 1 1月)

## This extension may BREAK OTHER EXTENSIONS in many unexpected ways. Do a full test before using it.

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