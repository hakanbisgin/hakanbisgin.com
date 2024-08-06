<?php

namespace App\View\Components\custom;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class box extends Component
{

    public $icon = null;
    public $content = null;
    /**
     * Create a new component instance.
     */
    public function __construct($icon = null, $content = null)
    {
        $this->icon = $icon;
        $this->content = $content;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.custom.box');
    }
}
