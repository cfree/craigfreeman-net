<?php
/**
 * Template Name: Kitchen Sink
 *
 * Displays all of the possible HTML elements
 *
 * @package cfree
 */

get_header();

?>
<div id="content" class="site-content">
	<div id="primary" class="content-area">
		<section class="masthead masthead--typewriter">
			<div class="container">
				<h1 class="masthead__title masthead__title__two-lines"><?php _e( 'Front-End Engineering', 'cfree' ); ?></h1>
			</div>
		</section>

		<div class="container">
			<main id="main" class="site-main" role="main">
				<h1>Heading Level 1</h1>

				<h2>Heading Level 2</h2>

				<h3>Heading Level 3</h3>

				<h4>Heading Level 4</h4>

				<h5>Heading Level 5</h5>

				<h6>Heading Level 6</h6>

				<p class="intro">
					This is an introductory paragraph of text which has all the most common html elements in it such as the <strong>strong element</strong> which is <a href="#">used to give text strong importance</a>. 
					You could of course use the <b>b element</b> which represents a span of text stylistically different from normal text, without conveying any special importance or relevance. 
				</p>

				<p>
					This is a paragraph of text which has all the most common html elements in it such as the <strong>strong element</strong> which is used to give text strong importance. 
					You could of course use the <b>b element</b> which represents a span of text stylistically different from normal text, without conveying any special importance or relevance. 
					The <mark>mark element</mark> which represents highlighted text, i.e., a run of text marked for reference purposes. <em>The HTML em element marks text that has stress emphasis.</em>
					You could of course use the <i>i element</i> which represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. 
					<i>It is typically displayed in italic type</i>. The next piece of text is marked up using the code element <code>function()</code> and finally links will be styled <a href="https://developer.mozilla.org/en-US/docs/HTML/Element/a">like this</a>.
				</p>

				<p><a href="" class="button button--primary">Button Primary Centered</a></p>

				<p><a href="" class="button button--primary__ghost">Button Primary Ghost Centered</a></p>

				<p><a href="" class="button button--secondary">Button Secondary</a></p>

				<p><a href="" class="button button--secondary__ghost">Button Secondary Ghost</a></p>

				<p>
					<a href="" class="button button--primary">Button Primary</a>
					<a href="" class="button button--primary">Button Primary Adjacent</a>
				</p>
						 
				<ol>
					<li>List item one</li>
					<li>List item two</li>
					<li>List item three</li>
				</ol>

				<dl>
				  <dt>Firefox</dt>
				  <dd>A free, open source, cross-platform, graphical web browser
					  developed by the Mozilla Corporation and hundreds of volunteer
				  </dd>
				</dl>

				<blockquote>
					<p>Design is the fundamental soul of a human-made creation that ends
					up expressing itself in successive outer layers of the product or
					service.</p>
				</blockquote>

				<ul>
					<li>List item one</li>
					<li>List item two</li>
					<li>List item three is actually a lot longer than you might expect. It's longer for no reason other than to demonstrate how the lines will wrap. Does that make sense?</li>
					<li>List item four</li>
				</ul>

				<pre>
					header h1 a { 
					  display: block; 
					  width: 300px; 
					  height: 80px; 
					}
				</pre>

				<hr>

				<p>This wraps your code in <code>pre</code> tags and <code>code</code> tags.</p>

				<hr>

				<table>
					<thead>
						<tr>
							<th>Heading (th)</th>
							<th>Heading (th)</th>
							<th>Heading (th)</th>
							<th>Heading (th)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>data</td>
							<td>data</td>
							<td>data</td>
							<td>data</td>
						</tr>
						<tr>
							<td>data</td>
							<td>data</td>
							<td>data</td>
							<td>data</td>
						</tr>
						<tr>
							<td>data</td>
							<td>data</td>
							<td>data</td>
							<td>data</td>
						</tr>
					</tbody>
				</table>
			</main><!-- #main -->
		</div><!-- .container -->
	</div><!-- #primary -->
</div><!-- #content -->
<?php get_footer(); ?>
