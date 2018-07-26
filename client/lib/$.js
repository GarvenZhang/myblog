/**
 * 获取dom
 * // === 区别： === //
 * // === 1.getElementsBy系列返回动态 HTMLCollection 集合，每次调用会动态查询；querySelectAll()返回静态 NodeList 对象，是快照 === //
 * // === 2.传统的性能好；query系列的使用方便 === //
 */

export default function (selector, target) {
  return target ? target.querySelector(selector) : document.querySelector(selector)
}

export function getById (id) {
  return document.getElementById(id)
}

export function $s (selector, target) {
  return target ? target.querySelectorAll(selector) : document.querySelectorAll(selector)
}

export function getByClassName (className, target) {
  return target ? target.getElementsByClassName(className) : document.getElementsByClassName(className)
}

export function getByTagName (tagName, target) {
  return target ? target.getElementsByTagName(tagName) : document.getElementsByTagName(tagName)
}
