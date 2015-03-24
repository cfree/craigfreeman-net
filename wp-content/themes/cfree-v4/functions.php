<?php
/**
 * cfree functions and definitions
 *
 * @package cfree
 */

define( 'CF_ASSETS_VERSION', '1.0.0' );

/**
 * Includes
 */
if ( file_exists( dirname( __FILE__ ) . '/plugins/CMB2/init.php' ) ) {
	require_once dirname( __FILE__ ) . '/plugins/CMB2/init.php';
}

if ( file_exists( dirname( __FILE__ ) . '/inc/custom_data.php' ) ) {
	require_once dirname( __FILE__ ) . '/inc/custom_data.php';
}

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

if ( ! function_exists( 'cfree_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function cfree_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on cfree, use a find and replace
	 * to change 'cfree' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'cfree', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'cfree' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'quote', 'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'cfree_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	/*
	 * Add custom image sizes
	 */
	add_image_size( 'portfolio', 736, 490 );
}
endif; // cfree_setup
add_action( 'after_setup_theme', 'cfree_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function cfree_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'cfree' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'cfree_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function cfree_scripts() {
	if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
		wp_enqueue_style( 'cfree-style-dev', get_stylesheet_directory_uri() . '/assets/css/styles.css', array(), CF_ASSETS_VERSION );

		wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/assets/vendor/modernizr/modernizr.js', array(), CF_ASSETS_VERSION, false );
		wp_enqueue_script( 'cfree-scripts-dev', get_template_directory_uri() . '/assets/js/scripts.js', array( 'modernizr', 'jquery' ), CF_ASSETS_VERSION, true );
		wp_enqueue_script( 'cfree-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), CF_ASSETS_VERSION, true );
		wp_enqueue_script( 'cfree-skip-link-focus-fix', get_template_directory_uri() . '/assets/js/skip-link-focus-fix.js', array(), CF_ASSETS_VERSION, true );
	} else {
		wp_enqueue_style( 'cfree-style', get_template_directory_uri() . '/assets/css/styles.min.css', array(), CF_ASSETS_VERSION );

		wp_enqueue_script( 'cfree-scripts', get_template_directory_uri() . '/assets/js/scripts.min.js', array( 'jquery' ), CF_ASSETS_VERSION, true );
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'cfree_scripts' );

/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Legacy Filters
 */
//Add URL shortcode
function blogURL() {
        $href = get_bloginfo( 'url' );
        return $href;
}

add_shortcode( 'url', 'blogURL' );

//Replace the "[url]" shortcode with the working URL in the editor
function replaceURL_Shortcode($content) {
        $href = get_bloginfo( 'url' );
        $content = str_ireplace('[url]', $href, $content);
        return $content;
}

add_filter( 'the_editor_content', 'replaceURL_Shortcode' );

//Translate the working URL into the "[url]" shortcode to be saved in the DB
function insert_Shortcode($content) {
        $href = get_bloginfo( 'url' );
        $content = str_ireplace($href, '[url]', $content);
        return $content;
}

add_filter( 'content_save_pre', 'insert_Shortcode' );
