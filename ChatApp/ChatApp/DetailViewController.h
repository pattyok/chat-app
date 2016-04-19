//
//  DetailViewController.h
//  ChatApp
//
//  Created by Patty O'Hara on 4/18/16.
//  Copyright © 2016 pattyok. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DetailViewController : UIViewController

@property (strong, nonatomic) id detailItem;
@property (weak, nonatomic) IBOutlet UILabel *detailDescriptionLabel;

@end

