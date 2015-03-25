<?php
/**
 * The template for the search form
 *
 * @package cfree
 */
?>
<form class="search-form" action="<?php echo home_url(); ?>">
	<label for="s"><?php _e( 'Search site:', 'cfree' ); ?></label>
	<input type="text" name="s">
	<button class="search-button"><?php _e( 'Search', 'cfree' ); ?></button>
</form>
