'use strict';

/**
 * @ngdoc directive
 * @name lineupApp.directive:myNamePanel
 * @description
 * # myNamePanel
 */
angular.module('lineupApp')
  .directive('myNamePanel', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          console.log(attrs);
          var outerDiv = $('<div/>');

          outerDiv.css({
              opacity: 0.6,
              position: 'absolute',
              left: -300,
              bottom: 500,
              color: '#eac7df',
              'text-transform': 'uppercase',
              'height': '300px',
              'font-family': '"Roboto", sans-serif',
              'padding-left': '80px',
              'text-shadow': '0 0 30px #eac7df'
          });

          var nameHeader = $('<div>name</div>');
          nameHeader.css({
              color: '#12b7a7',
             'line-height': '1em',
             'font-weight': 'bold',
              'text-shadow': '0 0 30px #12b7a7'
          });

          var nameBox = $('<div>Scanlon</div>');
          nameBox.css({
             color: '#eac7df',
             'font-size': '2.6em',
             'line-height': '1em',
             'margin-bottom': '15px',
          });

          var subjectBox = $('<div>Subject: Robert Scanlon</div>');
          subjectBox.css({
             // 'font-weight': 'bold',
             'font-size': '1.6em',
             'display': 'none'
          });

          var info = [[
              'alias: "arscan"',
              'species: terran',
              'origin: terra',
              'legs: 2',
              'arms: 2',
              'height: 6\' 2"',
              'weight: 215lbs'
          ], [
              'education',
              'Cornell: BS Computer Science',
              'MIT: MS Engineering & Management',
              '&nbsp;',
              'occupation',
              'Software Engineer',
              'Web, Data viz'
          ]];

          var infoBox = $('<ul />');

          infoBox.css({
              'list-style': 'none',
              'padding': 0
          });


          for(var i = 0; i< info.length; i++){
              for(var j = 0; j< info[i].length; j++){
                  var liBox = $('<li class="infoBox' + i + '">' + info[i][j] + '</li>');
                  infoBox.append(liBox);
              }
          }

          $('li', infoBox).css({
              display: 'none'
          });

          var svgContainer = $('<div/>');

          svgContainer.css({
                  position: 'absolute',
                  left: 0,
                  //top: 78,
                  top: 178,
                  //height: 200,
                  height: 0,
                  overflow: 'hidden',
                  width: 100
              });

          var svgSubContainer = $('<div/>');
          svgSubContainer.css({
                  position: 'relative',
                  width: 100,
                  height: 200,
                  left: 0,
                  //height: '200px'
                   top: -100,
              });

          svgContainer.append(svgSubContainer);

          var paper = new Raphael(svgSubContainer[0], 100, 200);

          /* draw the new bullet points */
          function drawSvgLine(yStart, dir){

              paper
                .path( ['M', 26, yStart, 'L', 42, yStart + dir*16, 'L', 70, yStart + dir*16 ] )
                .attr({stroke: '#eac7df', 'stroke-width':1, 'opacity': 0.5})
                .glow({color: '#eac7df', opacity: 0.2, width: 5});
          }

          /* blue vertical line */
          paper
            .path( ['M', 70, 0, 'L', 70, 200] )
            .attr({stroke: '#12b7a7', 'stroke-width':1, 'opacity': 0.5})
            .glow({color: '#12b7a7', opacity: 0.2, width: 5});

          /* stem of bullets */
          paper
            .path( ['M', 0, 100, 'L', 34, 100] )
            .attr({stroke: '#eac7df', 'stroke-width':1, 'opacity': 0.5})
            .glow({color: '#eac7df', opacity: 0.2, width: 5});

          /* two short middle bullets */

          paper
            .path( ['M', 34, 100, 'L', 42, 92, 'L', 70, 92] )
            .attr({stroke: '#eac7df', 'stroke-width':1, 'opacity': 0.5})
            .glow({color: '#eac7df', opacity: 0.2, width: 5});

          paper
            .path( ['M', 34, 100, 'L', 42, 108, 'L', 70, 108] )
            .attr({stroke: '#eac7df', 'stroke-width':1, 'opacity': 0.5})
            .glow({color: '#eac7df', opacity: 0.2, width: 5});

          for(var k = 1; k<13; k++){
              var dir = -1;
              if(k > 6){
                  dir = 1;
              }
              drawSvgLine(10 + k * 14, dir);
          }

          outerDiv.append(nameHeader)
                  .append(nameBox)
                  .append(subjectBox)
                  .append(infoBox)
                  .append(svgContainer);

          element.append(outerDiv);

          outerDiv
             .velocity({bottom: 190, left: 300})
             .delay(5000)
             .velocity({left: 30})
             .velocity({left: 0}, {duration: 3000, loop: false});

          svgContainer.velocity({top: '-=100px', height: 200}, {duration:  700, delay: 2800, easing: 'linear', progress: function(el,percent){ }});
          svgSubContainer.velocity({top: 0}, {duration: 700, delay: 2800, easing: 'linear'});

          subjectBox.delay(1000).velocity('transition.slideRightIn', {stagger: 250});
          $('li.infoBox0', infoBox)
             .delay(1500)
             .velocity('transition.slideRightIn', {stagger: 100})
             .delay(3000)
             .velocity('transition.slideRightOut', {duration: 100});

          $('li.infoBox1', infoBox)
             .delay(6500)
             .velocity('transition.slideRightIn', {stagger:  200});

      }
    };
  });