Mailpile.Message.Tooltips.Crypto = function($content) {
  $content.find('.message-part-crypto-info, ' +
                '.message-inline-crypto-info, ' +
                '.message-metadata-crypto-info').qtip({
    content: {
      title: false,
      text: function(event, api) {
        var keyinfo = $(this).data('crypto_keyinfo');
        var html = ('<div>' +
          '<h4 class="' + $(this).data('crypto_color') + '">' +
          '  <span class="' + $(this).data('crypto_icon') + '"></span>' +
             $(this).attr('title') +
          '</h4>');
        html += '<p>' + $(this).data('crypto_message') + '</p>';
        if (keyinfo) {
          keyinfo = keyinfo.substring(keyinfo.length - 16);
          html += '<p><a href="javascript:Mailpile.UI.Modals.CryptoFindKeys({query: \'' + keyinfo + '\'})"><small>KEY ID: ' + keyinfo + '</small></a></p>';
        }
        html += '</div>';
        return html;
      }
    },
    style: {
      classes: 'qtip-thread-crypto',
      tip: {
        corner: 'bottom center',
        mimic: 'bottom center',
        border: 1,
        width: 12,
        height: 12,
        corner: true
      }
    },
    position: {
      my: 'bottom center',
      at: 'top center',
			viewport: $(window),
			adjust: {
				y: -5
			}
    },
    show: { delay: 100 },
    hide: { fixed: true, delay: 250 }
  });
};


Mailpile.Message.Tooltips.Attachments = function($content) {
  $content.find('a.attachment, a.attachment-image').qtip({
    content: {
      title: false,
      text: function(event, api) {
        var $e = $(this);
        console.log($e);
        var html = '';
        html += $e.attr('title')
        if ($e.data('description')) html += '<small>' + $e.data('description') + '</small>';
        html += '<small>{{_("Download")|escapejs}} ' + $e.data('size') + '</small>';
        return html;
      }
    },
    style: {
      classes: 'qtip-tipped',
      tip: {
        corner: 'bottom center',
        mimic: 'bottom center',
        border: 1,
        width: 12,
        height: 12,
        corner: true
      }
    },
    position: {
      my: 'bottom center',
      at: 'top center',
			viewport: $(window),
			adjust: {
				x: 0, y: -5
			}
    },
    show: { delay: 100 },
    hide: { fixed: true, delay: 250 }
  });
};
