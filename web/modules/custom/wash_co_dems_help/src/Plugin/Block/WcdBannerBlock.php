<?php

declare(strict_types=1);

namespace Drupal\wash_co_dems_help\Plugin\Block;

use Drupal\Core\Block\Attribute\Block;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\image\Entity\ImageStyle;
use Drupal\media\Entity\Media;
use Drupal\node\Entity\Node;
use Drupal\node\NodeInterface;

/**
 * Provides a wcd banner block.
 */
#[Block(
  id: 'wash_co_dems_help_wcd_banner',
  admin_label: new TranslatableMarkup('WCD Banner'),
  category: new TranslatableMarkup('Custom'),
)]
final class WcdBannerBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build(): array {
    $nid = 2;
    $node = Node::load($nid);

    if ($node instanceOf NodeInterface) {
      $media_id = $node->get('field_featured_image')->target_id;
      $media = Media::load($media_id);


      if ($media) {
        $image_uri = $media->get('field_media_image')->entity->getFileUri();
        $image_url = ImageStyle::load('large')->buildUrl($image_uri);

        $build['content'] = [
          '#theme' =>  'wash_co_dems_page_banner_theme',
          '#text' => 'This is a block that was rendered with twig!',
        ];

      } else {
        $build['content'] = [
          '#markup' => $this->t('Media not found'),
        ];
      }
    } else {
      $build['content'] = [
        '#markup' => $this->t('Node not found'),
      ];
    }

    return $build;
  }

}
