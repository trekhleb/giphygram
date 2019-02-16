import PropTypes from 'prop-types';

// PropType for Giphy Image entity.
export const gifImagePropType = PropTypes.shape({
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  mp4: PropTypes.string,
  mp4_size: PropTypes.string,
  webp: PropTypes.string,
  webp_size: PropTypes.string,
});

// PropType for Giphy images set.
export const gifImagesPropType = PropTypes.shape({
  fixed_height_still: gifImagePropType,
  original_still: gifImagePropType,
  fixed_width: gifImagePropType,
  fixed_height_small_still: gifImagePropType,
  fixed_height_downsampled: gifImagePropType,
  preview: gifImagePropType,
  fixed_height_small: gifImagePropType,
  downsized_still: gifImagePropType,
  downsized: gifImagePropType,
  downsized_large: gifImagePropType,
  fixed_width_small_still: gifImagePropType,
  preview_webp: gifImagePropType,
  fixed_width_still: gifImagePropType,
  fixed_width_small: gifImagePropType,
  downsized_small: gifImagePropType,
  fixed_width_downsampled: gifImagePropType,
  downsized_medium: gifImagePropType,
  original: gifImagePropType,
  fixed_height: gifImagePropType,
  looping: gifImagePropType,
  original_mp4: gifImagePropType,
  preview_gif: gifImagePropType,
});

// PropType for the Giphy search result entity.
export const gifItemPropType = PropTypes.shape({
  title: PropTypes.string,
  _score: PropTypes.number,
  type: PropTypes.string,
  id: PropTypes.string,
  slug: PropTypes.string,
  url: PropTypes.string,
  bitly_gif_url: PropTypes.string,
  bitly_url: PropTypes.string,
  embed_url: PropTypes.string,
  username: PropTypes.string,
  source: PropTypes.string,
  rating: PropTypes.string,
  content_url: PropTypes.string,
  source_tld: PropTypes.string,
  source_post_url: PropTypes.string,
  is_sticker: PropTypes.number,
  import_datetime: PropTypes.string,
  trending_datetime: PropTypes.string,
  images: gifImagesPropType,
});
