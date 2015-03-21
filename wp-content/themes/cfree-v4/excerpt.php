<?php
/**
 * The template part for displaying excerpt results.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package cfree
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-excerpt' ); ?>>
	<div class="entry-meta">
		<?php if ( 'post' == get_post_type() ) : ?>
			<?php cfree_posted_on(); ?>
		<?php endif; ?>
	</div><!-- .entry-meta -->
	<div class="post__content">
		<header class="entry-header">
			<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
		</header><!-- .entry-header -->

		<div class="entry-summary">
			<?php the_excerpt(); ?>
		</div><!-- .entry-summary -->

		<footer class="entry-footer">
			<?php cfree_entry_footer(); ?>
		</footer><!-- .entry-footer -->
	</div>
</article><!-- #post-## -->
